import React from 'react'
import { css } from '@emotion/core'
import Gravatar from 'react-gravatar'
import moment from 'moment'

const avatarSize = 75

export default function Comments({ comments }) {
	const hasComments = !!comments.length
	return <>
		<h3>Comments:</h3>
		{hasComments && (
			<div css={styles.commentsList}>
				{comments.map(({
					node: {
						body,
						name,
						md5,
						date,
					},
				}, index) => {
					const formattedBody = `<p>${body.split(/\n/).join(`</p><p>`)}</p>`
					return (
						<div css={styles.columns} key={`comment${index}`}>
							<div>
								<Gravatar
									md5={md5}
									rating='pg'
									default='mp'
									size={avatarSize}
								/>
							</div>
							<div>
								<h4 css={styles.name}>{name}</h4>
								<time dateTime={date} css={styles.time}>
									{moment(date).format(`MMMM Do YYYY, h:mma`)}
								</time>
								<div dangerouslySetInnerHTML={{__html: formattedBody}} />
							</div>
						</div>
					)
				})}
			</div>
		)}
		{!hasComments && (
			<div>There are no comments for this post.</div>
		)}
	</>
}

const styles = {
	commentsList: css`
		> div{
			border-top: 1px solid #ccc;
			padding: 20px 0;
			:first-of-type{
				border-top: 0;
			}
		}
	`,
	name: css`
		margin: 0;
	`,
	time: css`
		font-size: .75em;
	`,
	columns: css`
		display: flex;
		> div{
			:first-of-type{
			width: ${avatarSize}px;
			}
			:last-of-type{
				padding-left: 30px;
				width: calc(100% - ${avatarSize}px);
			}
		}
	`,
}
