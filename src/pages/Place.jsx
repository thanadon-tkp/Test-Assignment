import React, { useEffect, useState } from "react";
import example from "../data/example_data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faSlash } from "@fortawesome/free-solid-svg-icons";

//css
import "../styles/Place.css";

//component
import TopBar from "../components/TopBar";
import SiteBar from "../components/SiteBar";

function Place() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState("restaurant");

  useEffect(() => {
    const _data = example.filter((data) => {
      return data.categories.includes(categories);
    });

    setData(_data);
  }, [categories]);

  return (
    <div>
      <TopBar />
      <SiteBar />
      <div className="main">
        <div className="input-bar">
          <h1>Place List</h1>
          <div className="place-input">
            <select
              className="custom-select"
              onChange={(even) => {
                setCategories(even.target.value);
              }}
            >
              <option value="restaurant">Restaurant</option>
              <option value="bakery">Bakery</option>
              <option value="cafe">Cafe</option>
            </select>
            <FontAwesomeIcon icon={faSlash} size="lg" className="faLine" />
            <input
              type="text"
              className="custom-input"
              placeholder="Search name..."
              onChange={(even) => {
                setSearch(even.target.value);
              }}
            />
          </div>
        </div>

        <div className="grid-container">
          {data
            .filter((data) => {
              if (search == "") {
                return data;
              } else {
                return data.name.toLowerCase().includes(search.toLowerCase());
              }
            })
            .map((data, key) => (
              <div key={key} className="grid-item">
                <div className="title">
                  <div className="profile-image">
                    <img src={data.profile_image_url} />
                  </div>
                  <div className="profile-detail">
                    <h4>{data.name}</h4>
                    <div className="operation-time">
                      <div className="time-open-close">
                        <FontAwesomeIcon icon={faCalendarDays} size="sm" />
                        <a>
                          {data.operation_time[0].time_open} AM -{" "}
                          {data.operation_time[0].time_close} PM
                        </a>
                      </div>
                      <div className="rating">
                        <FontAwesomeIcon icon={faCircle} size="sm" />{" "}
                        <a>{data.rating}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="menu-img">
                  <img src={data.images[0]} alt="" />
                  <img src={data.images[1]} alt="" />
                  <img src={data.images[2]} alt="" />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Place;
