import { useEffect, useState } from "react";
import { clear, loadProducts,select_time } from "../actions/actions";
import { useDispatch, useSelector } from "react-redux";



export const Tablelist = () => {
  const table_State = useSelector((state) => state.table);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProducts(table_State));
  }, [dispatch]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
        padding: "20px",
      }}
    >
      {table_State.map((table) => (
        <div
          key={table.id}
          style={{
            background: "#f8f8f8",
            padding: "16px",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
          role='img'
            src={table.src}
            alt={`table number ${table.id}`}
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "8px",
              marginBottom: "10px",
            }}
          />

          <p style={{ marginBottom: "8px", fontWeight: 600 }}>
            {table.price} — {table.position} 
          </p>
          <p 
          style={{ marginBottom: "8px", fontWeight: 600 }}>
            time chosen:{table.chosen_time}
          </p>
          <select
            onChange={(e) => {
              const time = Number(e.target.value);
              dispatch(
                select_time({
                  table,
                  time,
                })
              );
            }}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          >
            <option value="">Choose a time</option>

            {table.available_times.map((time) => (
              <option
              role='option'
              
                key={time}
                value={time}
                style={{
                      background: "#c2f7c5", // light green
                  fontWeight: "bold",
              
              
                }}


              >
                {time}
              </option>
            ))}
          </select>
          <button 
          style={{
            color:'red'
          }}
          onClick={
            ()=>
              dispatch(clear(table))
          }
          >clear</button>
        </div>
      ))}
      
    </div>
  );
};
