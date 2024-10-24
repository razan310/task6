

function Subscribe() {
    return (
        <div className="flex flex-col items-center justify-center py-8 px-4">
        <div className="text-center mb-6">
            <p className="pb-3 text-base font-semibold tracking-wide text-violet">Newlatters</p>
            <h1 className="pb-3  text-5xl font-semibold dark:text-light text-myDark">Stories and interviews</h1>
            <p className="font-light text-xl text-center text-gray-400 mt-2">
            Subscribe to learn about new product features, the latest in technology,<br/> solutions, and updates.
            </p>
        </div>
        <div className="w-full max-w-md">
            <div className="flex  items-center">
            <input
                type="text"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 mx-2 py-3 border border-gray-300 rounded-md placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
            />
            <button className="px-6 py-3 bg-violet text-white rounded-md hover:bg-violet-200 transition duration-300">
                Subscribe
            </button>
            </div>
            <p className="text-xs text-gray-400 mt-3">
            We care about your data in our <span className="text-violet-900 underline underline-offset-2">privacy policy</span>
            </p>
        </div>
        </div>
    )
}

export default Subscribe
