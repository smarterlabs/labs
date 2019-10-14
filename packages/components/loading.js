import React from 'react'
import { css } from '@emotion/core'
import CircularProgress from '@material-ui/core/CircularProgress'
import { primaryColor } from 'config/colors'

export default function LoadingAnimation(){
	return (
		<div css={styles.container}>
			<CircularProgress style={{ color: primaryColor }} />
		</div>
	)
}

const styles = {
	container: css`
		text-align: center;
	`,
}
