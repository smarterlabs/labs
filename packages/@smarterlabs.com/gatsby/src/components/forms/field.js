import React, { useState } from 'react'
import { css } from '@emotion/core'
import { Field, ErrorMessage } from 'formik'
import { primaryColor } from '../../config/colors'

export default function CustomField({
	type = `text`,
	handleBlur,
	errors,
	touched,
	name,
	label,
	component,
	values,
}){
	const [isFocused, setIsFocused] = useState(false)

	const isTouched = touched[name]
	const isErrored = errors[name] && isTouched
	let input
	let value = ``
	if (values) {
		value = values[name]
	}
	let height = `auto`
	if (component === `textarea` && input && values[name] !== ``) {
		height = input.scrollHeight
	}
	return (
		<label css={[
			isErrored && styles.error,
			styles.inputBlock,
		]}>
			<div css={[
				styles.label,
				(value || isFocused) && styles.movedLabel,
			]}>
				{label || name}
			</div>
			<div css={[
				styles.inputContainer,
				!isErrored && isFocused && styles.focusedInputContainer,
				isErrored && styles.erroredInputContainer,
			]}>
				<Field
					name={name}
					type={type}
					component={component}
					onFocus={() => setIsFocused(true)}
					onBlur={e => {
						setIsFocused(false)
						if (handleBlur) {
							handleBlur(e)
						}
					}}
					rows={component === `textarea` ? 1 : null}
					innerRef={el => input = el}
					style={{ height }}
					css={[
						styles.input,
						isErrored && styles.erroredInput,
					]}
				/>

			</div>
			<ErrorMessage
				name={name}
				component='div'
				css={styles.errorMsg}
			/>
		</label>
	)


}

const styles = {
	inputBlock: css`
		display: block;
		margin-bottom: 16px;
		font-size: .9em;
	`,
	label: css`
		position: relative;
		transform: scale(1) translate(0, 26px);
		transform-origin: 0;
		transition: transform .2s;
		color: #fff;
	`,
	movedLabel: css`
		transform: scale(.8) translate(0, 0);
	`,
	inputContainer: css`
		position: relative;
		padding-bottom: 2px;
		:before, :after{
			content: '';
			position: absolute;
			right: 0;
			left: 0;
			bottom: 0;
			height: 2px;
		}
		:before{
			border-bottom: 1px solid #fff;
		}
		:after{
			border-bottom: 2px solid ${primaryColor};
			transform: scaleX(0);
			transition: transform .2s;
		}
	`,
	focusedInputContainer: css`
		:after{
			transform: scaleX(1);
			border-color: ${primaryColor};
		}
	`,
	erroredInputContainer: css`
		:after{
			transform: scaleX(1);
			border-color: #f44336;
		}
	`,
	input: css`
		display: block;
		width: 100%;
		outline: none;
		border: 0;
		font-size: 1em;
		padding: 5px 3px;
		background: transparent;
		resize: none;
	`,
	error: css`
		color: #f44336;
	`,
	erroredInput: css`
		color: #f44336;
	`,
	errorMsg: css`
		margin-top: 3px;
		font-size: .75em;
		:first-letter{
			text-transform: uppercase;
		}
	`,
}
