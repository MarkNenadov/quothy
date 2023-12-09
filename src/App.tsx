import { useState } from 'react';
import { RandomQuote } from './components/RandomQuote';
import { ByAuthor } from './components/ByAuthor';
import { ByTopic } from './components/ByTopic';
import { data } from './data/quoteData';

function App() {
  const [currentTab, setCurrentTab] = useState("random")

  return (
    <div className="m-2 md:m-4 text-2xl p-2 md:p-4">
      <h2 className="bold text-5xl p-3">Quothy</h2>
      <div className="flex flex-row justify-between">
        <div 
          className={`cursor-pointer mb-2 p-3 ${currentTab === "random" ? "bg-sky-300" : "bg-sky-200"} w-1/3 text-center border border-1 border-black`}
          onClick={() => setCurrentTab("random")}
        >
          Random Quote
        </div>
        <div 
          className={`cursor-pointer mb-2 p-3 ${currentTab === "author" ? "bg-sky-300" : "bg-sky-200"} w-1/3 text-center border border-1 border-black`}
          onClick={() => setCurrentTab("author")}
        >
          By Author
        </div>
        <div 
          className={`cursor-pointer mb-2 p-3 ${currentTab === "topic" ? "bg-sky-300" : "bg-sky-200"} w-1/3 text-center border border-1 border-black`}
          onClick={() => setCurrentTab("topic")}
        >
          By Topic
        </div>
      </div>
      {
        currentTab === "random" && <RandomQuote quoteList={data} />
      }
      {
        currentTab === "author" && <ByAuthor quoteList={data} />
      }
      {
        currentTab === "topic" && <ByTopic quoteList={data} />
      }
      <div className="text-sm text-center pt-2">
        Quothy uses React, Typescript, and TailwindCSS. You can see the source on <a className="underline text-blue-500" href={"https://github.com/MarkNenadov/quothy"}>GitHub</a>.
      </div>
    </div>
  );  
}

export default App;