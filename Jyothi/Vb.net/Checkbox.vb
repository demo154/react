Public Class Form6
    Private Sub Button1_Click(sender As Object, e As EventArgs) Handles Button1.Click



        If CheckBox1.Checked Then
            CheckBox1.Text = 50
            'MessageBox.Show("Icecream")
            ListBox1.Items.Add("Icecream=50")
            CheckBox1.Checked = False


        End If

        If CheckBox2.Checked Then
            CheckBox2.Text = 50
            'MessageBox.Show("Waffles=50")
            ListBox1.Items.Add("Waffles=50")
            CheckBox2.Checked = False
        End If
        If CheckBox3.Checked Then
            CheckBox3.Text = 50
            'MessageBox.Show("Cakes")
            ListBox1.Items.Add("Cakes=50")
            CheckBox3.Checked = False
        End If

    End Sub


End Class