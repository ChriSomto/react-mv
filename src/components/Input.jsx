const Input = ({ icon: Icon, ...props }) => {
	return (
		<div className='relative mb-6'>
			<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
				<Icon className='size-5 text-[#b934ca]' />
			</div>
			<input
				{...props}
				autoComplete="new-password" 
				aria-autocomplete="none"
				autoCorrect="off"
				spellCheck="false"
				className='w-full pl-10 pr-3 py-2 bg-transparent bg-opacity-50 rounded-lg border border-[#8743a7] focus:border-[#c254cc] focus:ring-2 focus:ring-[#492058] text-white placeholder-[#a7a6a6] transition duration-200'
			/>
		</div>
	);
};

export default Input;
