import "@styles/globals.css";
import Nav from '@components/Nav';
import Provider from "@components/Provider";

export const metadata = {
    title: "Promptopia",
    description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div />
                </div>

                <main className='flex flex-col items-center'>
                    <Nav />
                    {children}
                </main>
            </Provider>
        </body>

    </html>
);

export default RootLayout 