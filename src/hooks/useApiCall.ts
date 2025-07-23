import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import api from "../service/api";
import { IApiCall } from "../types/apiservice.types";

const useApiCall = ({
  key,
  url,
  method,
}: IApiCall): UseQueryResult<unknown, Error> | any => {
  const query = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await api.get(url);
      return response.data.data;
    },
    enabled: method === "get",
  });

  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.post(url, data);
      return response.data.data;
    },
  });
  const updateMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.put(url, data);
      return response.data.data;
    },
  });

  const deleteMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (id) => {
      const response = await api.delete(`${url}/${id}`);
      return response.data.data;
    },
  });

  const patchMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.patch(url, data);
      return response.data.data;
    },
  });

  if (method === "get") {
    return query;
  } else if (method === "post") {
    return mutation;
  } else if (method === "put") {
    return updateMutation;
  } else if (method === "delete") {
    return deleteMutation;
  } else if (method === "patch") {
    return patchMutation;
  } else {
    throw new Error(`Unsupported method: ${method}`);
  }
};

export default useApiCall;
