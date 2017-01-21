require 'test_helper'

class SamplesControllerTest < ActionDispatch::IntegrationTest
  test "should get Article" do
    get samples_Article_url
    assert_response :success
  end

end
