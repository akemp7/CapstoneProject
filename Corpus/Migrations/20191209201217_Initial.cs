using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace CorpusApi.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Corpus",
                columns: table => new
                {
                    SummaryId = table.Column<int>(nullable: false)
                        .Annotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn),
                    UserSumm = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Corpus", x => x.SummaryId);
                });

            migrationBuilder.InsertData(
                table: "Corpus",
                columns: new[] { "SummaryId", "UserSumm" },
                values: new object[] { 1, "This will be the summary of the video they see. It will be a somewhat lengthy summary, but hopefully not too verbose." });

            migrationBuilder.InsertData(
                table: "Corpus",
                columns: new[] { "SummaryId", "UserSumm" },
                values: new object[] { 2, "This is another summary for testing purposes..." });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Corpus");
        }
    }
}
