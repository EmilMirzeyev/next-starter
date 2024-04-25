import Link from "next/link";

const data = {
  rows: [
    {
      col: [
        {
          rowSpan: 3,
          colSpan: null,
          value: "No",
        },
        {
          rowSpan: 3,
          colSpan: null,
          value: "Təşkilatların adları",
        },
        {
          rowSpan: 2,
          colSpan: null,
          value: "Ölçü vahidi",
        },
        {
          rowSpan: null,
          colSpan: 5,
          value: "Daşımaların növləri",
        },
      ],
    },
    {
      col: [
        {
          rowSpan: null,
          colSpan: 3,
          value: "Şəhərdaxili",
        },
        {
          rowSpan: null,
          colSpan: 2,
          value: "Şəhərlərarası",
        },
      ],
    },
    {
      col: [
        {
          rowSpan: null,
          colSpan: null,
          value: "Əmsal",
        },
        {
          rowSpan: null,
          colSpan: null,
          value: "1.0",
        },
        {
          rowSpan: null,
          colSpan: null,
          value: "1.5",
        },
        {
          rowSpan: null,
          colSpan: null,
          value: "2.0",
        },
        {
          rowSpan: null,
          colSpan: null,
          value: "1.0",
        },
        {
          rowSpan: null,
          colSpan: null,
          value: "1.5",
        },
      ],
    },
  ],
};

const Home = () => {
  return (
    <div className="container">
      <h1 className="text-lg font-bold">HomePage</h1>
      <Link href="/posts" className="text-blue">
        Go to Posts
      </Link>
      <table className="border-collapse w-full">
        <tbody>
          {data.rows.map((tr) => (
            <tr>
              {tr.col.map((td) => (
                <td
                  className="border border-black py-1 px-2"
                  colSpan={td.colSpan || undefined}
                  rowSpan={td.rowSpan || undefined}
                >
                  {td.value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
