import _ from "lodash";

export const getPaginationRange = (totalPage, limit, currentPage, siblings) => {
	let totalPageNumToShow = 7 + siblings;
	if (totalPage <= totalPageNumToShow) {
		return _.range(1, totalPage + 1);
	}
	let leftSiblingIndex = Math.max(currentPage - siblings, 1);
	let rightSiblingIndex = Math.min(currentPage + siblings, totalPage);

	let showLeftDots = leftSiblingIndex > 2;

	let showRightDots = rightSiblingIndex < totalPage - 2;

	if (!showLeftDots && showRightDots) {
		let leftItemsCount = 3 + 2 * siblings;
		return [..._.range(1, leftItemsCount + 1), "...", totalPage];
	} else if (showLeftDots && !showRightDots) {
		let RightItemCount = 3 + 2 * siblings;
		return [
			"1",
			"...",
			..._.range(totalPage - RightItemCount + 1, totalPage + 1),
		];
	} else {
		return [
			"1",
			"...",
			..._.range(leftSiblingIndex, rightSiblingIndex + 1),
			"...",
			totalPage,
		];
	}
};

// const paginationRange = useMemo(() => {
// 	const totalPageCount = Math.ceil(totalCount / pageSize);

// 	// Pages count is determined as  firstPage + lastPage + currentPage + 2*DOTS
// 	const totalPageNumbers = 5;

// 	/*
// 	Case 1:
// 	If the number of pages is less than the page numbers we want to show in our
// 	paginationComponent, we return the range [1..totalPageCount]
//   */
// 	if (totalPageCount<=totalPageNumbers) {
// 		return range(1, totalPageCount);
// 	}

// 	/*
// 	  Calculate left and right sibling index and make sure they are within range 1 and totalPageCount
//   */
// 	const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
// 	const rightSiblingIndex = Math.min(
// 		currentPage + siblingCount,
// 		totalPageCount
// 	);

// 	/*
// 	We do not show dots just when there is just one page number to be inserted between the extremes of sibling and the page limits i.e 1 and totalPageCount. Hence we are using leftSiblingIndex > 2 and rightSiblingIndex < totalPageCount - 2
//   */
// 	const shouldShowLeftDots = leftSiblingIndex > 2;
// 	const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

// 	const firstPageIndex = 1;
// 	const lastPageIndex = totalPageCount;

// 	/*
// 	  Case 2: No left dots to show, but rights dots to be shown
//   */
// 	if (!shouldShowLeftDots && shouldShowRightDots) {
// 		let leftItemCount = 3 + 2 * siblingCount;
// 		let leftRange = range(1, leftItemCount);

// 		return [...leftRange, DOTS, totalPageCount];
// 	}

// 	/*
// 	  Case 3: No right dots to show, but left dots to be shown
//   */
// 	if (shouldShowLeftDots && !shouldShowRightDots) {
// 		let rightItemCount = 3 + 2 * siblingCount;
// 		let rightRange = range(
// 			totalPageCount - rightItemCount + 1,
// 			totalPageCount
// 		);
// 		return [firstPageIndex, DOTS, ...rightRange];
// 	}

// 	/*
// 	  Case 4: Both left and right dots to be shown
//   */
// 	if (shouldShowLeftDots && shouldShowRightDots) {
// 		let middleRange = range(leftSiblingIndex, rightSiblingIndex);
// 		return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
// 	}
// }, [totalCount, pageSize, siblingCount, currentPage]);

// return paginationRange;
