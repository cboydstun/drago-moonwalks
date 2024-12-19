export default function Contact() {
    return (
        <main className="flex flex-col self-center items-center justify-items-center ml-10">
            <h1 className="text-white font-bold text-4xl font-serif">Contact</h1>
                <div className="flex flex-col items-center p-6">
                    <h2 className="text-white font-bold text-2xl font-serif p-4">Phone Number: 210-633-7867</h2>
                    <h2 className="text-white font-bold text-2xl font-serif p-4">Email: dragos.moonwalks@yahoo.com</h2>
                    <a className="text-white font-bold text-2xl font-serif mt-4 border bg-blue-600 rounded-xl p-1 hover:text-blue-600 hover:bg-white" target="blank" href="https://facebook.com/DragosMoonwalks">Facebook Page</a>
                </div>
        </main>
    )
};