import React from 'react'
import { css } from '@emotion/core'
import { object, string } from 'yup'
import Field from './field'
import Button from './button'
import Form from './form'
import Error from '../error-message'
import Success from '../success-message'
import Loading from '../loading'

export default function ContactForm(){
	return (
		<div className='form'>
			<Form
				action='/.netlify/functions/contact'
				recaptcha={false}
				initialValues={{
					email: ``,
					name: ``,
					message: ``,
				}}
				validationSchema={object().shape({
					email: string()
						.email()
						.required(`required`),
					name: string()
						.required(`required`),
					message: string()
						.required(`required`),
				})}
				error={
					<Error>Server error! Your message was not received.</Error>
				}
				success={
					<Success>Thank you for your message! A representative will reach out to you as soon as possible.</Success>
				}
				loading={
					<Loading />
				}
				form={props => <>
					<Field
						label='Email'
						name='email'
						type='email'
						{...props}
					/>
					<Field
						label='Name'
						name='name'
						{...props}
					/>
					<Field
						label='Message'
						name='message'
						component='textarea'
						{...props}
					/>

					<div css={styles.inputBlock}>
						<Button
							type='submit'
							disabled={props.isSubmitting}
						>
							get in touch
						</Button>
					</div>
				</>}
			/>
		</div>
	)
}

const styles = {
	inputBlock: css`
		display: block;
		margin-top: 20px;
	`,
}
