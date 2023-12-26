import BooleanSettings from './BooleanSetting'
import packageJson from '../../../../../package.json'

const Version = () => {
	return (
		<>
			<h3 className='mb-2 mt-4 text-lg font-semibold'>Version</h3>
			{/* ### Update check */}
			<div className='rounded-t-btn collapse-title bg-base-200 text-md flex flex-row items-center justify-between pr-4'>
				<div className='flex flex-row items-center gap-2 font-semibold'>
					<div>
						v{packageJson.version}
						<p className='text-base-content/50 text-sm'>
							Last checked: 18-11-2023
						</p>
					</div>
				</div>
				<button className='btn btn-primary btn-sm capitalize'>
					Check for updates
				</button>
			</div>
			{/* ### Download updates automatically */}
			<BooleanSettings
				title='Download updates automatically'
				description='Except on metered connections'
				position='bottom'
			/>
		</>
	)
}

export default Version
