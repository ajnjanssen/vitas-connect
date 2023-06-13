import React, { useState } from 'react'
import TabContent from './TabContent'

function Tab({ tabs }) {
  const [activeTab, setActiveTab] = useState(0)

  const handleClick = (tabIndex, e) => {
    setActiveTab(tabIndex)
    e.preventDefault()
  }

  return (
    <div className="text-sm font-medium text-center text-base-200 border-base-300 w-full">
      <ul className="flex justify-evenly">
        {tabs.map((tab, index) => (
          <li
            key={index}
            className={`border-l border-r w-full border-t border-primary-300 rounded-t-box ${
              index === activeTab
                ? 'text-base-content bg-base-100 border-t-4 border-primary'
                : 'text-gray-500 bg-base-100 hover:text-primary border-t-4 border-base-200'
            }`}
          >
            <a
              href="#"
              onClick={(e) => handleClick(index, e)}
              className={`inline-block p-4 -mb-1 w-full rounded-t-lg ${
                index === activeTab ? '' : 'hover:text-primary'
              } ${index === activeTab ? 'cursor-not-allowed' : ''}`}
              aria-current={index === activeTab ? 'page' : null}
              aria-disabled={index === activeTab ? 'true' : null}
            >
              {tab.title}
            </a>
          </li>
        ))}
      </ul>
      <TabContent tabs={tabs} activeTab={activeTab} />
    </div>
  )
}

export default Tab
