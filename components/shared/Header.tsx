import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Header = () => {
	return (
		<div className="bg-orange-600 p-5 text-sm text-white flex flex-col items-center lg:flex-row justify-between">
			<div className=" md:flex content-center items-center gap-6">
				<div className=" flex content-center items-center gap-1">
					<MdOutlineMarkEmailUnread />
					<p>info@nongorfoundation.org</p>
				</div>

				<div className=" flex content-center items-center gap-1">
					<PiClockCountdownBold />
					<p>Mon - Sat: 08.00 am - 05:00</p>
				</div>
			</div>

			<div className="hidden md:flex items-center gap-1">
				<p>Pellentesque hendrerit turpis magna, non</p>
				<FaFacebookF /> <FaYoutube /> <FaTwitter /> <FaInstagram />
			</div>
		</div>
	);
};

export default Header;
