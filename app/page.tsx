"use client"

import { useState } from 'react';
import Image from 'next/image';


export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function showSidebar() {
    setSidebarVisible(true);
  }

  function hideSidebar() {
    setSidebarVisible(false);
  }

  return (
    <div>
      <header>
        <div className="header--bar">
          <Image src="/assets/logo.svg" alt="logo" width={50} height={50} />
          <button onClick={showSidebar} className="svg-icon">
            <Image src="/assets/menu-icon.svg" alt="menu icon" width={30} height={30} />
          </button>
        </div>

        <nav className={`side--menu ${sidebarVisible ? 'visible' : ''}`}>
          <button onClick={hideSidebar} id="close" className="svg-icon">
            <Image src="/assets/close-icon.svg" alt="close icon" width={30} height={30} />
          </button>
          <ul>
            <li><a href="#">What&apos;s New</a></li>
            <li><a href="#">Revision</a></li>
            <li><a href="#">Thesis</a></li>
            <li><a href="#">Job Alert</a></li>
            <li><a href="#">Add to Home Screen</a></li>
            <li>
              <div className="cta--telegram">
                <a className="telegram-btn" href="https://t.me/prepxconsult">
                  Forum
                  <Image src="/assets/telegram.svg" alt="telegram" width={20} height={20} />
                </a>
              </div>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome to Kid Hacker!</h1>
        <p>This is a starter template for Next.js projects.</p>
      </main>

      <style jsx>{`
        .header--bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          background-color: #fff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .svg-icon {
          background: none;
          border: none;
          cursor: pointer;
        }

        .side--menu {
          display: none;
          flex-direction: column;
          position: fixed;
          top: 0;
          right: 0;
          width: 250px;
          height: 100%;
          background-color: #fff;
          box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
          padding: 1rem;
          transition: transform 0.3s ease;
        }

        .side--menu.visible {
          display: flex;
        }

        .side--menu ul {
          list-style: none;
          padding: 0;
        }

        .side--menu li {
          margin: 1rem 0;
        }

        .cta--telegram {
          margin-top: auto;
        }

        .telegram-btn {
          display: flex;
          align-items: center;
          text-decoration: none;
          color: #0088cc;
        }

        .telegram-btn img {
          margin-left: 0.5rem;
        }
      `}</style>
    </div>
  );
}