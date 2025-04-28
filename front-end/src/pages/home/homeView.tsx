export function HomeView() {
    return (
        <div className="flex flex-col w-full h-screen bg-gray-100">
            <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
                <h1 className="text-xl font-bold">Home View</h1>
            </header>
            <main className="flex flex-1 p-4">
                <div className="flex flex-col w-full">
                    <h2 className="text-lg font-semibold">Welcome to the Home View</h2>
                    <p>This is where the main content will go.</p>
                </div>
            </main>
        </div>
    )
}