import { useMutation, useQuery, UseQueryResult } from "@tanstack/react-query";
import api from "../service/api";
import { IApiCall } from "../types/apiservice.types";

const useApiCall = ({
  key,
  url,
  method,
  enabled,
}: IApiCall): UseQueryResult<unknown, Error> | any => {
  const query = useQuery({
    queryKey: [key],
    queryFn: async () => {
      const response = await api.get(url);
      return response.data;
    },
    enabled: method === "get" && enabled !== false,
  });

  const mutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.post(url, data);
      return response?.data;
    },
  });
  const updateMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.put(url, data);
      return response.data;
    },
  });

  const deleteMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (id) => {
      const response = await api.delete(`${url}/${id}`);
      return response.data;
    },
  });

  const patchMutation = useMutation({
    mutationKey: [key],
    mutationFn: async (data) => {
      const response = await api.patch(url, data);
      return response.data;
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
  }
};

export default useApiCall;
