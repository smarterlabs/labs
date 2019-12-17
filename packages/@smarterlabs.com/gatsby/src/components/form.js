import React, { useState } from 'react'
import fetch from 'isomorphic-fetch'
import { Formik, Form } from 'formik'
import Recaptcha from 'react-google-invisible-recaptcha'

export default function CustomForm({
	recaptcha = true,
	action,
	onSubmit: onSubmitProp,
	initialValues,
	validationSchema,
	loading,
	form,
	persistAfterSuccess,
	error: errorMsg,
	success: successMsg,
}){
	const [success, setSuccess] = useState(false)
	const [error, setError] = useState(false)
	let recaptchaRef

	console.log(`success`, success)

	const onSubmit = async (values, { resetForm, setSubmitting }) => {
		console.log(`onSubmit`)
		setError(false)

		try {
			if (action) {
				console.log(`action`, action)
				const res = await fetch(action, {
					method: `post`,
					body: JSON.stringify(values),
				})
				console.log(`res`, res)
				const body = await res.text()
				console.log(`body`, body)
				if (res.status === 200) {
					setSuccess(true)
					resetForm()
				}
				else {
					setSuccess(false)
					setError(true)
				}
			}
			else if (onSubmitProp) {
				try {
					await onSubmitProp(values)
					setSuccess(!!success)
					resetForm()
				}
				catch{
					setSuccess(false)
					setError(true)
				}
			}
			else {
				console.log(`Form data not submitting anywhere:`, values)
				setSuccess(!!success)
				resetForm()
			}
		}
		catch (err) {
			console.error(err)
			setSuccess(false)
			setError(true)
		}

		setSubmitting(false)
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values, fns) => {
				console.log(`Formik onSubmit`)
				console.log(`recaptcha`, recaptcha)
				console.log(`values.recaptcha`, values.recaptcha)
				if (recaptcha && !values.recaptcha) {
					fns.setSubmitting(false)
					recaptchaRef.execute()
				}
				else {
					onSubmit(values, fns)
				}
			}}
		>
			{props => {
				const {
					isSubmitting,
					setFieldValue,
					submitForm,
				} = props
				return (
					<Form>
						{!isSubmitting && error && errorMsg}
						{!isSubmitting && success && successMsg}
						{isSubmitting && loading}
						{!isSubmitting && (!success || persistAfterSuccess) && form(props)}

						{recaptcha && (
							<div style={{ display: `none` }}>
								<Recaptcha
									ref={el => recaptchaRef = el}
									sitekey={process.env.GATSBY_SITE_RECAPTCHA_KEY}
									onResolved={() => {
										const response = recaptchaRef.getResponse()
										console.log(`reCAPTCHA response`, response)
										setFieldValue(`recaptcha`, response)
										submitForm()
									}}
									onError={err => {
										console.error(err)
										setFieldValue(`recaptcha`, false)
									}}
									onExpired={() => {
										setFieldValue(`recaptcha`, false)
									}}
								/>
							</div>
						)}
					</Form>
				)
			}}
		</Formik>
	)
}
