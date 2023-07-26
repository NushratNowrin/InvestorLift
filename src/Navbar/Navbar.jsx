import { FaEnvelope } from "react-icons/fa";
import { BsTwitter, BsLinkedin, BsBoxArrowInRight } from "react-icons/bs";
import { ImInstagram, ImFacebook2 } from "react-icons/im";

const Navbar = () => {
	return (
		<div>
			<div className='bg-[#274ABB]  flex justify-between items-center px-14'>
				<a href='mailto: support@investorlift.com'>
					<div className='text-white  font-medium flex flex-row justify-center items-center gap-1'>
						<div className='text-base'>
							<FaEnvelope />
						</div>
						<div className='text-sm'>support@investorlift.com</div>
					</div>
				</a>

				<div className='text-white text-[15px] font-normal flex flex-row justify-center items-center gap-1'>
					<a href='https://twitter.com/' rel='noreferrer' target='_blank'>
						<div className='p-3 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
							<BsTwitter />
						</div>
					</a>
					<a href='https://instagram.com/' rel='noreferrer' target='_blank'>
						<div className='p-3 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
							<ImInstagram />
						</div>
					</a>
					<a href='https://facebook.com' rel='noreferrer' target='_blank'>
						<div className='p-3 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
							<ImFacebook2 />
						</div>
					</a>
					<a href='https://linkedin.com' rel='noreferrer' target='_blank'>
						<div className='p-3 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
							<BsLinkedin />
						</div>
					</a>
				</div>
			</div>

			{/* main header */}
			<div className='bg-white shadow-lg flex justify-between items-center px-14 pt-5 pb-6'>
				<div className='w-80'>
					<a href='/'>
						<img
							src='https://s3.us-east-2.amazonaws.com/sendlift/deals-site-images/29/img_logo.png'
							alt='logo'
						/>
					</a>
				</div>
				<div className="flex items-center">
					<a href=''>
						<div className='text-[#274ABB] hover:text-black flex flex-row justify-center items-center gap-1.5'>
							<div className='text-base'>
								<BsBoxArrowInRight />
							</div>
							<div className='text-sm'>Log In</div>
						</div>
					</a>
                    <a href="" className="ml-4 text-[#274ABB] text-sm border border-[#274ABB] hover:bg-[#274ABB] hover:text-white px-5 py-3 rounded-sm">Register</a>
                    <a href="" className="ml-8 text-white text-sm bg-[#274ABB] hover:bg-[#3e5ec1] px-5 py-3 rounded-sm">Buy Box</a>
                    <a href="https://get.investorlift.com/" rel='noreferrer' target='_blank' className="ml-4 text-white text-sm bg-[#274ABB] hover:bg-[#3e5ec1] px-5 py-3 rounded-sm">Post a Deal</a>
                   
				</div>
			</div>
		</div>
	);
};

export default Navbar;
