import React from "react"
import propTypes from "prop-types"
import { Link } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink";


import * as S from "./styles"

const Pagination = ({
  isFirst,
  isLast,
  currentPage,
  numPages,
  prevPage,
  nextPage,
}) => {
  return (
    <S.PaginationWrapper>
      {!isFirst && <AniLink cover direction="left" bg="#16202c" duration={0.6} to={prevPage}>Página anterior</AniLink>}
      <p>
        {currentPage} de {numPages}
      </p>
      {!isLast && <AniLink cover direction="right" bg="#16202c" duration={0.6} to={nextPage}>Proxima página</AniLink>}
    </S.PaginationWrapper>
  )
}

Pagination.propTypes = {
  isFirst: propTypes.bool.isRequired,
  isLast: propTypes.bool.isRequired,
  currentPage: propTypes.number.isRequired,
  numPages: propTypes.number.isRequired,
  prevPage: propTypes.string,
  nextPage: propTypes.string,
}

export default Pagination
