import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
    const router = useRouter();
    const pathname = router.pathname;

    const getLinkClass = (path: string) =>
        `px-3 py-2 text-sm font-semibold ${
            pathname === path ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-600'
        } hover:text-purple-800`;

    return (
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-lg font-bold text-purple-800">IPL 2025</h1>
                <div className="flex space-x-4">
                    <Link href="/">
                        <span className={getLinkClass('/')}>Home</span>
                    </Link>
                    <Link href="/ipl">
                        <span className={getLinkClass('/ipl')}>Matches</span>
                    </Link>
                    <Link href="/ipl/points">
                        <span className={getLinkClass('/ipl/points')}>Points Table</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
