import React from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const Paginador = props => {
  return (
    <Pagination className="mt-5">
      <PaginationItem disabled>
        <PaginationLink previous href="#">
          Prev
        </PaginationLink>
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink href="#">1</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">2</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">3</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">4</PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#">
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default Paginador;
