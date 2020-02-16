Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load

    End Sub
    Private Sub btnImage_Click(sender As Object, e As EventArgs) Handles btnImage.Click
        btnImage.Visible = False

    End Sub

    Private Sub Moto_Click(sender As Object, e As EventArgs) Handles Moto.Click
        Label1.Text = "The Moto is Learn"
        btnImage.Visible = False


    End Sub

    Private Sub Logo_Click(sender As Object, e As EventArgs) Handles Logo.Click
        Label1.Text = "Work Hard"
        btnImage.Visible = True
    End Sub

    Private Sub ExitButton_Click(sender As Object, e As EventArgs) Handles ExitButton.Click
        Application.Exit()

    End Sub


End Class
