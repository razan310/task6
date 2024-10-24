import { useParams } from 'react-router-dom';
import useStore from './../../zustand/store/useStore'; // استيراد الزستاند

const SpecificArticle = () => {
  const { id } = useParams(); // استخراج المعرّف من الرابط
  const { getArticleById } = useStore(); // استخدام الوظائف من zustand

  const article = getArticleById(id);
  console.log(article);
  
  // Check if the article exists before rendering
  if (!article) {
    return (
      <div className="mx-5 my-6 md:my-7 lg:my-8 lg:mx-28">
        <h1 className="text-2xl font-semibold dark:text-light"> </h1>
      </div>
    );
  }

  return (
    <div className="px-8">
      {/* عرض تفاصيل المقالة */}
      <div className=" mb-12">
        <p className="text-violet">{article.date}</p>
        <h1 className="my-4 text-3xl font-bold dark:text-light">{article.title}</h1>
        <img src={article.mainImage} alt={article.title} className="w-full h-auto object-cover" />
        <p className="mt-4 text-lg dark:text-light">{article.discription}</p>

        {article.sections.map((section, index) => (
          <div key={index} className="mt-8">
            <img src={section.image} alt={`Section ${index + 1}`} className="w-full h-auto object-cover" />
            <p className="mt-4 text-lg dark:text-light">{section.content}</p>
          </div>
        ))}

        <div className="mt-5 flex gap-2">
          {article.categories.map((category, index) => (
            <span key={index} className="px-3 py-1 bg-sky-100 text-sky-500 rounded-full text-sm">{category}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecificArticle;
