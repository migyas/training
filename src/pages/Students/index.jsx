import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MoreVertical } from "react-feather";
import { Modal } from "../../components/Modal";
import { Table } from "../../components/Table";
import useOutsideClick from "../../hooks/useOutsideClick";
import { Layout } from "../../layout";
import {
  deleteStudent,
  getAllStudents,
  getAllStudentsPaginate,
  getForSearchTerm, 
} from "../../service/v1/students-service";
import UIIntersectionObserver from "../../utils/intersectionObserve";
import { Container, Content, Pagination } from "./styles";
import loadOptions from "./loadOptions";

export function Students() {
  const [value, setValue] = useState(null);
  const [perPage, setPerPage] = useState(10);
  const [students, setStudents] = useState({
    count: 0,
    items: []
  });
  const [hasMore, setHasMore] = useState(false)

  const defaultAdditional = {
    page: 1
  };
  
  const loadPageOptions = async (q, prevOptions, { page }) => {
    const { options, hasMore } = await loadOptions(q, page);
  
    return {
      options,
      hasMore,
      additional: {
        page: page + 1
      }
    };
  };

  return (
    <div>
       
    </div>
  );
}
