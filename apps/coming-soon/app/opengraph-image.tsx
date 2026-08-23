import { ImageResponse } from 'next/og';

export const alt = 'Product Peers BD — Coming Soon';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
	return new ImageResponse(
		<div
			style={{
				width: '100%',
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-between',
				background: '#0b1613',
				padding: '80px',
				position: 'relative'
			}}
		>
			<div
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '6px',
					background: '#14b8a6'
				}}
			/>

			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '14px'
				}}
			>
				<div
					style={{
						display: 'flex',
						width: '14px',
						height: '14px',
						borderRadius: '999px',
						background: '#14b8a6'
					}}
				/>
				<div
					style={{
						display: 'flex',
						fontSize: '26px',
						letterSpacing: '0.2em',
						textTransform: 'uppercase',
						color: '#8fb0ab'
					}}
				>
					Live — Bangladesh&apos;s product community
				</div>
			</div>

			<div style={{ display: 'flex', flexDirection: 'column' }}>
				<div
					style={{
						display: 'flex',
						fontSize: '88px',
						fontWeight: 600,
						color: '#eaf6f4',
						lineHeight: 1.05,
						letterSpacing: '-0.02em'
					}}
				>
					The community&apos;s live.
				</div>
				<div
					style={{
						display: 'flex',
						fontSize: '88px',
						fontWeight: 600,
						color: '#14b8a6',
						lineHeight: 1.05,
						letterSpacing: '-0.02em'
					}}
				>
					The platform&apos;s next.
				</div>
			</div>

			<div
				style={{
					display: 'flex',
					fontSize: '30px',
					color: '#8fb0ab'
				}}
			>
				productpeersbd.org
			</div>
		</div>,
		{ ...size }
	);
}
