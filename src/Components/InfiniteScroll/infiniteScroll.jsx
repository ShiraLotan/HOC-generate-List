import React, { useEffect, useRef } from "react";
import { VariableSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
import InfiniteItem from "./InfiniteItem/infiniteItem";

const InfiniteScroll = ({ list }) => {
  const listRef = useRef({});
  const rowHeights = useRef({});

  function getRowHeight(index) {
    return rowHeights.current[index] + 80 || 82;
  }

  function Row({ data, index, style }) {
    const rowRef = useRef({});

    useEffect(() => {
      if (rowRef.current) {
        setRowHeight(index, rowRef.current.clientHeight);
      }
    }, [rowRef]);

    return (
      <div style={style}>
        <div ref={rowRef}>
          <InfiniteItem data={data[index]} />
        </div>
      </div>
    );
  }

  function setRowHeight(index, size) {
    listRef.current.resetAfterIndex(0);
    rowHeights.current = { ...rowHeights.current, [index]: size };
  }

  return (
    <div
      style={{
        height: "100vh"
      }}
    >
      <AutoSizer>
        {({ height, width }) => (
          <List
            className="List"
            height={height - 74}
            itemCount={list.length}
            itemSize={getRowHeight}
            itemData={list}
            ref={listRef}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    </div>
  );
};

export default InfiniteScroll;
