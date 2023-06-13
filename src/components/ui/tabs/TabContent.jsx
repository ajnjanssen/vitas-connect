import React from 'react'

function TabContent({ tabs, activeTab }) {
  const activeTabContent = tabs[activeTab].content

  return (
    <div className="rounded-b-box">
      {activeTabContent.map((item, index) => (
        <div
          key={index}
          className={`w-full border border-base-200 bg-base-100 hover:bg-base-200 px-4 h-24 ${
            index === activeTabContent.length - 1 ? 'rounded-b-box' : ''
          }`}
        >
          <div className="flex space-x-8 group/tab">
            <div className="w-24 h-24 flex flex-col justify-center my-auto items-center">
              <img
                className="h-20 object-scale-down rounded-full my-auto bg-white p-1"
                src={item.type.image}
                alt=""
              />
            </div>

            <div className="w-3/4 flex flex-col justify-center group/content">
              <div>
                <h5 className="card-title text-center text-base-content text-lg group-hover/tab:text-primary">
                  {item.type.title}
                </h5>
              </div>

              <div className="flex items-center justify-start space-x-2">
                <h6 className="text-muted group-hover/tab:text-base-content">
                  {item.type.subtitle}
                </h6>
                <p>&nbsp;-&nbsp;</p>
                <p className="text-muted group-hover/tab:text-base-content">
                  {item.type.dienstverband}
                </p>
              </div>
            </div>
          </div>
          {/* <Divider /> */}
        </div>
      ))}
    </div>
  )
}

export default TabContent
