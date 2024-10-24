import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const handleClick = (pageNumber) => {
        onPageChange(pageNumber);
    };

    const handlePrevious = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center border-t-2 py-2 mt-4 space-x-2">
            {/* زر Previous */}
            <div>
                <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 py-1 px-3 rounded-md transition duration-200 
                                ${currentPage === 1 ? 'cursor-not-allowed text-gray-700 dark:text-light' : 'dark:text-light hover:dark:text-gray-200 hover:text-gray-500'}`}
                >
                    <GrLinkPrevious /> Previous
                </button>
            </div>
            {/* أزرار الصفحات */}
            <div style={{ margin: '0px' }}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handleClick(index + 1)}
                        className={`py-1 px-3 rounded-md transition duration-200 
                                    ${currentPage === index + 1 ? 'bg-blue-50 text-gray-700' : 'dark:text-light hover:dark:text-gray-700 hover:bg-blue-50'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            {/* زر Next */}
            <div>
                <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 py-1 px-3 rounded-md transition duration-200 
                                ${currentPage === totalPages ? 'cursor-not-allowed text-gray-700 dark:text-light' : 'dark:text-light hover:dark:text-gray-200 hover:text-gray-500'}`}
                >
                    Next <GrLinkNext />
                </button>
            </div>
        </div>
    );
}

export default Pagination;
