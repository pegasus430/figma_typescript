import { isToday, isYesterday, format } from "date-fns";
import { SortOption, Ticket } from "types";

export const formatDate = (date: Date) => {
  if (isToday(date)) {
    return `Today @ ${format(date, "p")}`;
  }

  if (isYesterday(date)) {
    return `Yesterday @ ${format(date, "p")}`;
  }

  return format(date, "MMM d @ p");
};

export const filterTickets = (tickets: Ticket[], filter: { [key: string]: any; }, keyword?: string) => {
  const result = tickets.filter((ticket) => {
    let result = true;
    for (const key in filter) {
      result = result && (ticket[key].toString().toLowerCase().includes(filter[key].toLowerCase()));
    }
    return result;
  });
  if (keyword) {
    return result.filter((ticket) => {
      let result = false;
      for (const key in ticket) {
        if (typeof (ticket[key]) === "object") {
          for (const sub_key in ticket[key]) {
            result = result || (ticket[key][sub_key].toString().toLowerCase().includes(keyword.toLowerCase()));
          }
        } else {
          result = result || (ticket[key].toString().toLowerCase().includes(keyword.toLowerCase()));
        }
      }
      return result;
    });
  } else {
    return result;
  }
};

export const sortTickets = (tickets: Ticket[], sortOption: SortOption) => {
  tickets.sort((ticket1: Ticket, ticket2: Ticket) => {
    if (sortOption.direction === "desc") {
      return ticket1[sortOption.orderBy] > ticket2[sortOption.orderBy] ? -1 : 0;
    } else {
      return ticket1[sortOption.orderBy] > ticket2[sortOption.orderBy] ? 0 : -1;
    }
  });
  return tickets;
};
