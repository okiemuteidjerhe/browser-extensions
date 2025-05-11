import style from "../styles/main.module.css"
import Button from "./Button";
import Card from "./Card";
import { useState } from "react";

//Importing Logos
import dev from "../assets/images/logo-devlens.svg";
import spy from "../assets/images/logo-style-spy.svg";
import speed from "../assets/images/logo-speed-boost.svg"
import wiz from "../assets/images/logo-json-wizard.svg";
import tab from "../assets/images/logo-tab-master-pro.svg";
import view from  "../assets/images/logo-viewport-buddy.svg";
import mark from "../assets/images/logo-markup-notes.svg";
import grid from "../assets/images/logo-grid-guides.svg";
import palette from  "../assets/images/logo-palette-picker.svg";
import link from "../assets/images/logo-link-checker.svg";
import dom from "../assets/images/logo-dom-snapshot.svg";
import consoleP from "../assets/images/logo-console-plus.svg";


let data = [
  {
      "logo": dev,
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
  },
  {
      "logo": spy,
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
  },
  {
      "logo": speed,
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
  },
  {
      "logo": wiz,
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
  },
  {
      "logo": tab,
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
  },
  {
      "logo":view,
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
  },
  {
      "logo": mark,
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
  },
  {
      "logo": grid,
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
  },
  {
      "logo":palette,
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
  },
  {
      "logo": link,
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
  },
  {
      "logo": dom,
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
  },
  {
      "logo": consoleP,
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
  }
]

export default function Main(){
  //Handling the toggle and updating the state (view)
  const [extArr, setExtArr] = useState(data);
  function handleToggle(name){
    setExtArr(prev=>{
      return prev.map(item=>{
        if (item.name === name){
          return {...item, isActive: !item.isActive}
        }else{
          return item
        }
      })
    })
  }
  //Handling filtering and updating the state (view)
  const [filter, setFilter] = useState('All')
  const filteredItems = extArr.filter(item=>{
    if(filter === 'All'){
      return true; //No condition for filtering, so just return true for each item.
    }else if(filter === 'Active'){
      return item.isActive; 
    }
    /* if(filter === 'Inactive')  */else{return !item.isActive;}
  })
  function handleFiltering(text){
    setFilter(text);
  }

  let cards = filteredItems.map(datum => {
    return <Card 
      key={datum.name}
      name = {datum.name}
      description = {datum.description}
      logo = {datum.logo}
      isActive = {datum.isActive}
      handleToggle = {handleToggle}
    />
  })
    return (
      <main>
        <div className={style.top}>
          <h1>Extensions List</h1>
          <div className={style.btns}>
            <Button text="All" isActive={filter==="All"} handleFiltering = {handleFiltering}/>
            <Button text="Active" isActive={filter === "Active"} handleFiltering = {handleFiltering}/>
            <Button text="Inactive" isActive={filter === "Inactive"} handleFiltering = {handleFiltering}/>
          </div>
        </div>
        <div className={style.cards}>
          {cards}
        </div>
      </main>
    );
}