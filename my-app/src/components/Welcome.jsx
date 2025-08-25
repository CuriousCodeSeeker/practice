const Welcome = ({name}) => {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Welcome to Our App!</h1>
            <p className="text-lg text-gray-600">We're glad to have you here, {name}.</p>
        </div>
    )
}
export default Welcome;
