import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const BlogsPage = () => {
  const [loading] = useState(false); // setLoading removed since it's unused

  const blogs = [
    {
      id: 1,
      title: "What is useState and how does it work in React?",
      content:
        "useState is a React Hook that allows you to add state to functional components. " +
        "Before hooks, only class components could have state. Now with useState, functional components can also manage stateful logic easily."
    },
    {
      id: 2,
      title: "What is the purpose of useEffect in React?",
      content:
        "useEffect is a React Hook that lets you perform side effects in function components."
    },
    {
      id: 3,
      title: "What is a custom hook in React and when should you use one?",
      content:
        "A custom hook in React is a reusable function that starts with `use` and lets you encapsulate hook logic (like useState, useEffect, etc.) that you want to share across multiple components."
    },
    {
      id: 4,
      title: "Difference between controlled and uncontrolled components? Which one is better?",
      content:
        "For most React apps — especially form-heavy apps like yours (doctor appointment booking) — controlled components are preferred for their predictability, validation, and state control."
    },
    {
      id: 5,
      title: "Tell us something about useFormStatus()",
      content:
        "useFormStatus() is a React hook used with React Server Components (mainly in frameworks like Next.js 13+ using the App Router) — specifically when working with <form> and server actions."
    }
  ];

  if (loading) return <LoadingSpinner />;

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">React Concepts Blog</h2>

      <div className="space-y-10">
        {blogs.map(({ id, title, content }) => (
          <article key={id} className="bg-white rounded-lg shadow p-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">{content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
