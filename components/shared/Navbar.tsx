import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { PiClockCountdownBold } from "react-icons/pi";
import { FaFacebookF, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
	return (
		<section>
			{/* Contact Information */}
			<div className="bg-orange-600 p-5 font-semibold">
				<div className=" md:flex content-center items-center gap-16">
					<div className=" flex content-center items-center gap-1">
						<MdOutlineMarkEmailUnread />
						<p>info@nongorfoundation.org</p>
					</div>

					<div className=" flex content-center items-center gap-1">
						<PiClockCountdownBold />
						<p>Mon - Sat: 08.00 am - 05:00</p>
					</div>
				</div>

				<div className="hidden md:flex content-center items-center gap-1 ml-40">
					<p>Pellentesque hendrerit turpis magna, non</p>
					<FaFacebookF /> <FaYoutube /> <FaTwitter /> <FaInstagram />
				</div>
			</div>

			{/* Main Header Content Section */}
			<div>Header</div>
		</section>
	);
};

export default Navbar;
