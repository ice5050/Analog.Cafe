require 'test_helper'

class TemplateControllerTest < ActionDispatch::IntegrationTest
  test "should get Article" do
    get template_Article_url
    assert_response :success
  end

end
