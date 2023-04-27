import '../index.css'

function Login(){
    

    return(
        <div>
            <div class="flex justify-center items-center h-screen">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="login-button">Login</button>
            </div>

            <div id="login-modal" class="fixed z-10 inset-0 overflow-y-auto hidden">
                <div class="flex items-center justify-center min-h-screen">
                    <div class="bg-white w-full max-w-md mx-auto rounded shadow-lg py-6 px-4">
                        <div class="text-gray-600 mb-4 text-center text-lg font-semibold">Login</div>
                        <form>
                            <div class="mb-4">
                                <label class="block text-gray-700 font-bold mb-2" for="email">
                                    Email
                                </label>
                                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email"/>
                            </div>
                            <div class="mb-6">
                                <label class="block text-gray-700 font-bold mb-2" for="password">
                                    Password
                                </label>
                                <input class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Password"/>
                            </div>
                            <div class="flex items-center justify-between">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                    Login
                                </button>
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" id="close-button">
                                    Close
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Login;