Public Class Form1
    Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
        'TODO: This line of code loads data into the 'Database11DataSet.Details' table. You can move, or remove it, as needed.
        Me.DetailsTableAdapter.Fill(Me.Database11DataSet.Details)

    End Sub

    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click
        DetailsBindingSource.AddNew()
    End Sub

    Private Sub Button3_Click(sender As Object, e As EventArgs) Handles Button3.Click
        DetailsBindingSource.EndEdit()
        DetailsTableAdapter.Update(Database11DataSet.Details)
        MessageBox.Show("Saved Successfully")
    End Sub

    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click
        DetailsBindingSource.RemoveCurrent()
    End Sub
End Class
