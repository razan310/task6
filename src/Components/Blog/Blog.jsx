import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";


function Blog({ id, date, imageSrc, title, discription, buttons, articleClass, imgClass, textclass, buttonClass, flexBasis }) {
  return (
    <div className={`article gap-4 ${articleClass} rounded-lg ${flexBasis}`}>
      <img src={imageSrc} alt={title} className={`${imgClass} `} />
      <div className={`${textclass}`}>
      <p className="text-violet font-semibold text-sm mb-1">{date}</p>
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-1 text-myDark dark:text-light">
          {title} 
        </h2>
        <Link to={`/article/${id}`}>
          <GoArrowUpRight className="text-2xl dark:text-light text-myDark"/>
        </Link>
      </div>
      <p className="font-normal text-base text-myGray dark:text-mylightGray mb-3">{discription}</p>
      <div >
        {buttons.map((buttonLabel, index) => (
          <button key={index} className={`px-3 py-1 m-2 rounded-2xl ${buttonClass[index]}`}>
            {buttonLabel}
          </button>
        ))}
      </div>
      </div>
    </div>
  );
}

export default Blog;
