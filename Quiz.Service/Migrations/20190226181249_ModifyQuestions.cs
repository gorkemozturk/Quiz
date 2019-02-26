using Microsoft.EntityFrameworkCore.Migrations;

namespace Quiz.Service.Migrations
{
    public partial class ModifyQuestions : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserID",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserID",
                table: "Questions");
        }
    }
}
