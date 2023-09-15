import React from "react";

function Menu({ title, items }) {
  return (
    <section>
      <nav className="grid gap-y-4">
        <h6 className="text-lg text-primary-brand-color">{title}</h6>
        <ul className="grid gap-y-2">
          {items.map((item, key) => (
            <li key={key}>
              <a href="#" className="text-sm hover:text-primary-brand-color">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Menu;
