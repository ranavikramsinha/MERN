import profilePic from "../assets/pic.png";

const Header = () => {
    return (
        <>
        <header className = "bg-blue-600 text-white px-5 py-7 rounded-xl flex justify-between items-center">
            <div>
                <div className = "font-bold text-3xl">Rana Vikram Sinha</div>
                <div className = "text-lg">Full Stack Developer</div>
            </div>
                <img src={profilePic} className = "rounded-full w-20"/>
        </header>
        </>
    )
}

export default Header