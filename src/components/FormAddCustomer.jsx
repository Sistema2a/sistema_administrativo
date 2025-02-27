"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

const FormAddCustomer = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const res = await axios.post("/api/loan_customers", data);
    // const resJSON =await res.json();
    console.log(res);

    if (res.status == 200) {
      router.push("/dashboard");
    }
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[80%] h-[60%] grid grid-cols-2 bg-stone-900 "
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <div className="w-[90%] flex justify-between gap-1 ">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[48%]
            "
            placeholder="Nombre"
            {...register("name", {
              required: {
                value: true,
                message: "Campo requerido",
              },
              minLength: {
                value: 2,
                message: "El nombre debe tener mínimo 2 caracteres",
              },
            })}
          />
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[48%]
            "
            placeholder="Apellido"
            {...register("lastname", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
                minLength: {
                  value: 2,
                  message: "El nombre debe tener mínimo 2 caracteres",
                },
              })}
          />
        </div>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[90%]
            "
          placeholder="Cédula de Identidad"
          {...register("ci", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener mínimo 2 caracteres",
            },
          })}
        />
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[90%]
            "
          placeholder="Nro de Télefono"
          {...register("telephone", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener mínimo 2 caracteres",
            },
          })}
        />

        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[90%]
            "
          placeholder="Email"
          {...register("email", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            pattern: {
              value:
                /^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}$/,
              message: "Email no válido",
            },
          })}
        />
        <textarea
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[90%]
            "
          placeholder="Dirección"
          {...register("direction", {
            required: {
              value: true,
              message: "Campo requerido",
            },
            minLength: {
              value: 2,
              message: "El nombre debe tener mínimo 2 caracteres",
            },
          })}
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2">
        <input
          className="block w-[90%] text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
          aria-describedby="file_input_help"
          id="file_input"
          type="file"
          accept="image/*"
        />
        <label
          htmlFor=""
          className="w-[90%] dark:text-white flex items-center gap-3"
        >
          Cantidad Préstada:
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[30%]
            "
            {...register("loan", {
                required: {
                  value: true,
                  message: "Campo requerido",
                }
              })}
          />
          $
        </label>
        <label
          htmlFor=""
          className="w-[90%] dark:text-white flex items-center gap-3"
        >
          Porcentaje del Préstamo:
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[30%]
            "
            {...register("percentage", {
                required: {
                  value: true,
                  message: "Campo requerido",
                }
              })}
          />
          %
        </label>
        <label
          htmlFor=""
          className="w-[90%] dark:text-white flex items-center gap-3"
        >
          Fecha del Préstamo:
          <input
            type="date"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
            w-[40%]
            "
            {...register("date", {
                required: {
                  value: true,
                  message: "Campo requerido",
                },
              })}
          />
        </label>
        <button
          type="submit"
          className="w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Agregar Cliente
        </button>
      </div>
    </form>
  );
};

export default FormAddCustomer;
