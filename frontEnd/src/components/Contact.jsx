export default function Contact() {
    return (
        <main className="flex flex-col items-center justify-center">
            <h1 className="text-white font-bold sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6">Contact</h1>
            <div className="flex flex-col items-center p-4">
                <h2 className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl font-serif p-4">Phone Number: 210-633-7867</h2>
                <h2 className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl font-serif p-4">Email: dragos.moonwalks@yahoo.com</h2>
                <a 
                    className="text-white font-bold sm:text-xl md:text-2xl lg:text-3xl font-serif mt-4 border bg-blue-600 rounded-xl p-2 hover:text-blue-600 hover:bg-white"
                    target="blank"
                    href="https://facebook.com/DragosMoonwalks"
                >
                    Facebook Page
                </a>
            </div>
        </main>
    );
}
