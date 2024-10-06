const SocialMedia = ({url, icon, title}) => {

    return (
        <>
        <a href={url} className="flex gap-1 mb-1 text-blue-500 hover:text-blue-800">{icon} {title}</a>
        </>
    )

}

export default SocialMedia