import type { EventsFilters, SystemEvent } from "@/types/events.types.ts";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchEvents = async (filters: EventsFilters): Promise<SystemEvent[]> => {
  const params = new URLSearchParams();

  if (filters.minLevel !== undefined && filters.minLevel.length > 0) {
    params.append(
      "minLevel",
      filters.minLevel?.map((level) => level.toString()).join(","),
    );
  }
  if (filters.startDate) {
    params.append("startDate", filters.startDate.toISOString());
  }
  if (filters.endDate) {
    params.append("endDate", filters.endDate.toISOString());
  }

  // Używamy axios dla czytelniejszej obsługi błędów
  const { data } = await axios.get(`/api/events`, { params });
  return data;
};

export const useEvents = (filters: EventsFilters) => {
  return useQuery({
    // React Query potrzebuje prymitywów lub stabilnych obiektów w kluczu.
    // .toISOString() zapewnia unikalny string dla danej daty.
    queryKey: [
      "events",
      filters.minLevel,
      filters.startDate?.toISOString(),
      filters.endDate?.toISOString(),
    ],
    queryFn: () => fetchEvents(filters),
    placeholderData: (previousData) => previousData,
  });
};
