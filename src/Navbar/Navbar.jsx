import { FaEnvelope } from "react-icons/fa";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
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

				<div className='text-white text-base font-medium flex flex-row justify-center items-center'>
					<a href="https://twitter.com/" rel="noreferrer" target="_blank"><div className='p-3.5 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
						<BsTwitter />
					</div></a>
					<a href="https://instagram.com/" rel="noreferrer" target="_blank"><div className='p-3.5 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
						<ImInstagram />
					</div></a>
					<a href="https://facebook.com" rel="noreferrer" target="_blank"><div className='p-3.5 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
						<ImFacebook2 />
					</div></a>
					<a href="https://linkedin.com" rel="noreferrer" target="_blank"><div className='p-3.5 hover:bg-gradient-to-b from-white hover:text-[#274ABB]'>
						<BsLinkedin />
					</div></a>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
