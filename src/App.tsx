import { useEffect, useState } from 'react';
import { RandomQuote } from './components/RandomQuote';
import { ByAuthor } from './components/ByAuthor';
import { Tab } from './components/Tab';
import { ByTopic } from './components/ByTopic';
import { data } from './data/quoteData';
import { Quote } from './models/quotes'

function App() {
  const [currentTab, setCurrentTab] = useState("random")
  
  const [randomQuote, setRandomQuote] = useState<Quote | undefined>(undefined);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * data.length);
    setRandomQuote(data[randomIndex]);
  };

  useEffect(() => {
    generateRandomQuote();
  }); 

  return (
    <div className="m-2 md:m-4 text-2xl p-2 md:p-4">
      <h2 className="bold text-5xl p-3">Quothy</h2>
      <div className="flex flex-row justify-between">
        <Tab 
          label="Random"
          clickHook={() => {
            setCurrentTab("random");
            currentTab === "random" && generateRandomQuote();
          }}
          isActive={currentTab === "random"}
          tabIndex={0}
        />
        <Tab 
          label="By Author"
          clickHook={() => setCurrentTab("author")}
          isActive={currentTab === "author"}
          tabIndex={1}
        />
        <Tab 
          label="By Topic"
          clickHook={() => setCurrentTab("topic")}
          isActive={currentTab === "topic"}
          tabIndex={2}
        />
      </div>
      {
        currentTab === "random" && <RandomQuote randomQuote={randomQuote} />
      }
      {
        currentTab === "author" && <ByAuthor quoteList={data} />
      }
      {
        currentTab === "topic" && <ByTopic quoteList={data} />
      }
      <div className="text-sm text-center pt-2">
        {data.length} quotes present from {new Set(data.map( d => d.book.title)).size} authors. Quothy uses React, Typescript, Bun, and TailwindCSS. You can see the source on 
        &nbsp;<a 
          className="underline text-blue-800" 
          href={"https://github.com/MarkNenadov/quothy"}
          aria-label='"GitHub Source Link'
        >
          GitHub
        </a>.
      </div>
    </div>
  );  
}

export default App;