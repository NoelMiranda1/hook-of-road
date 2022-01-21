/** @format */

import React, { useState, useRef, useEffect } from "react";
import FilteredGrid from "../components/FilterGrid";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../style/form.css";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
import Lat from "../components/Layout";

export default function Register() {
  const [rows, setRows] = useState([
    {
      entrada: "20/01/2022",
      salida: "21/01/2022",
      placa: "gtk-1234",
      id: "202-100500-1000E",
      habitacion: "1",
      aire: "Si",
      price: 250
    }
  ]);
  const [columns, setColumns] = useState();
  const [completed, setCompleted] = useState(false);
  const grid = useRef();
  const [errortext, setErrortext] = useState("");

  const formik = useFormik({
    initialValues: {
      entrada: "",
      salida: "",
      placa: "",
      habitacion: "",
      id: "",
      aire: "",
      price: ""
    },
    validationSchema: Yup.object({
      entrada: Yup.string().required("Requiered!"),
      salida: Yup.string().required("Requiered!"),
      placa: Yup.string().min(3, "Minimum 3 characters").required("Required!"),
      habitacion: Yup.string()
        .min(1, "Mininum 1 characters")
        .required("Required!"),
      id: Yup.string().required("Required!"),
      aire: Yup.string().required("Required!"),
      price: Yup.number().required("Required!")
    }),
    onSubmit: async (values) => {
      //   console.log(values);
      const { entrada, salida, placa, habitacion, id, aire, price } = values;
      console.log(
        "entrada=>",
        entrada,
        "salida=>",
        salida,
        "placa=>",
        placa,
        "cuarto=>",
        habitacion
      );
      //   const info = JSON.stringify(values, null, 2);
      const final = [];
      const res = await fetch("URL", {
        method: "POST",
        body: JSON.stringify({
          entrada,
          salida,
          placa,
          habitacion,
          id,
          aire,
          price
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      const val = await res.json();
      final.push(val.data);
      console.log(val);
      setCompleted(true);
      setRows((prevState) => {
        return [...prevState, final];
      });

      !completed &&
        Swal.fire({
          icon: "success",
          title: "Registro completo...",
          text: "Registro en la tabla"
        });
    }
  });

  // // all job consulta
  // const fetchJobs = async () => {
  //   const finalarrray = [];
  //   const data = await JSON.parse(localStorage.getItem("token"));
  //   console.log("EN new JOb", data);
  //   const res = await fetch(
  //     "URL",
  //     {
  //       headers: { token: `${data?.data?.token}` },
  //     }
  //   );
  //   const valor = await res.json();
  //   console.log("El valor esta aqui mamon=>", valor);
  //   finalarrray.push(valor.data);
  //   const newRow = valor.result.map((item) => ({
  //     ...item,
  //     state: item.state ? "Activo" : "Desactivo",
  //   }));
  //   setRows(newRow);
  // };
  // useEffect(() => {
  //   fetchJobs();
  // }, []);
  //columnas
  useEffect(() => {
    setColumns([
      {
        title: "Entrada",
        dataIndex: "entrada",
        key: "0",
        fixed: "left",
        width: 200,
        ...grid.current.getColumnSearch("entrada")
      },
      {
        title: "Salida",
        dataIndex: "salida",
        key: "1",
        width: 200,
        ...grid.current.getColumnSearch("salida")
      },
      {
        title: "Placa",
        dataIndex: "placa",
        key: "2",
        width: 200,
        ...grid.current.getColumnSearch("placa")
      },
      {
        title: "Cuarto",
        dataIndex: "habitacion",
        key: "3",
        width: 200,
        ...grid.current.getColumnSearch("habitacion")
      },
      {
        title: "Cedula",
        dataIndex: "id",
        key: "4",
        width: 200,
        ...grid.current.getColumnSearch("id")
      },
      {
        title: "Aire Acondicionado",
        dataIndex: "aire",
        key: "5",
        width: 200,
        ...grid.current.getColumnSearch("aire")
      },
      {
        title: "Precio",
        dataIndex: "price",
        key: "6",
        width: 200,
        ...grid.current.getColumnSearch("price")
      }
    ]);
    // setRows({
    //   entrada: "hdjahjds",
    //   salida: "jsusfh",
    //   placa: "jhjhj",
    //   cuarto: "jhjhj"
    // });
  }, []);
  return (
    <Lat>
      <div className='App'>
        <h1>Nuevo trabajo</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className='form-content'>
            <div className='form'>
              <label className='form-label'>Entrada:</label>
              <input
                className='form-input'
                type='datetime-local'
                min='2020-01-01T00:00'
                max='2040-01-01T00:00'
                name='entrada'
                value={formik.values.entrada}
                onChange={formik.handleChange}
              />
              {formik.errors.entrada && formik.touched.entrada && (
                <p style={{ color: "red" }}>{formik.errors.entrada}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Salida:</label>
              <input
                className='form-input'
                type='datetime-local'
                min='2020-01-01T00:00'
                max='2040-01-01T00:00'
                name='salida'
                value={formik.values.salida}
                onChange={formik.handleChange}
              />
              {formik.errors.salida && formik.touched.salida && (
                <p style={{ color: "red" }}>{formik.errors.salida}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Placa:</label>
              <input
                className='form-input'
                type='text'
                name='placa'
                value={formik.values.placa}
                onChange={formik.handleChange}
              />
              {formik.errors.placa && formik.touched.placa && (
                <p style={{ color: "red" }}>{formik.errors.placa}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Cuarto</label>
              <input
                className='form-input'
                type='text'
                name='habitacion'
                value={formik.values.habitacion}
                onChange={formik.handleChange}
              />
              {formik.errors.habitacion && formik.touched.habitacion && (
                <p style={{ color: "red" }}>{formik.errors.habitacion}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Cedula</label>
              <input
                className='form-input'
                type='text'
                name='id'
                value={formik.values.id}
                onChange={formik.handleChange}
              />
              {formik.errors.id && formik.touched.id && (
                <p style={{ color: "red" }}>{formik.errors.id}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Aire Acondicionado</label>
              <input
                className='form-input'
                type='text'
                name='aire'
                value={formik.values.aire}
                onChange={formik.handleChange}
              />
              {formik.errors.aire && formik.touched.aire && (
                <p style={{ color: "red" }}>{formik.errors.aire}</p>
              )}
            </div>
            <div className='form'>
              <label className='form-label'>Precio</label>
              <input
                className='form-input'
                type='text'
                name='price'
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.errors.price && formik.touched.price && (
                <p style={{ color: "red" }}>{formik.errors.price}</p>
              )}
            </div>
          </div>

          <div>
            {!errortext ? null : <h2 style={{ color: "red" }}>{errortext}</h2>}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "20px"
            }}>
            <button className='btn' type='submit'>
              Registrar Trabajo
            </button>
          </div>
        </form>
        <div>
          <FilteredGrid ref={grid} columns={columns} rows={rows} />
        </div>
      </div>
    </Lat>
  );
}
