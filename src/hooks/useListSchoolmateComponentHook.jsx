import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { listSchoolmates, deleteSchoolmate } from "../services/SchoolmateService.js";

const useListSchoolmateComponentHook = () => {
  const [schoolmates, setSchoolmates] = useState([]);
  const navigate = useNavigate();

  const fetchSchoolmates = async () => {
    try {
      const response = await listSchoolmates();
      setSchoolmates(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchSchoolmates();
  }, []);

  const updateSchoolmate = (id) => {
    navigate(`/edit-schoolmate/${id}`);
  };

  const deleteSchoolmateById = async (id) => {
    await deleteSchoolmate(id);
    toast.error("Schoolmate deleted successfully!");
    fetchSchoolmates();
  };

  return {
    schoolmates: schoolmates,
    fetchSchoolmates,
    updateSchoolmate,
    deleteSchoolmateById,
  };
};

export default useListSchoolmateComponentHook;
